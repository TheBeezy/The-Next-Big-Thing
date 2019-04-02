from selenium import webdriver
from selenium.webdriver.common.keys import Keys;
from selenium.common.exceptions import WebDriverException
import time
import re

#function to click on a button given the element
def clickButton(element):
	driver.execute_script("arguments[0].scrollIntoView(true);", element)	
	element.click()

def getTermElement():
	driver.get(url)
	termButton = booklist.find_element_by_class_name('selectBoxDropdownLink')
	return termButton

#Gets the department, class number, and section and is returned as a list
def getClasses():
	classes = []
	driver.get(url);
	booklist = driver.find_element_by_class_name('bookRowContainer')

	termButton = booklist.find_element_by_class_name('selectBoxDropdownLink')
	clickButton(termButton)

	#anytime a drop down box is click on, the program must give the webpage time for the other dropdown boxes to load
	time.sleep(0.3)

	#selects the term 'Spring 2019'
	selectTerm = termButton.find_element_by_xpath('..').find_elements_by_class_name('termOption')
	clickButton(selectTerm[2])

	dropDownBox = booklist.find_elements_by_class_name('bncbTextInput')	
	time.sleep(0.3)

	#clicks the dropdown box that contains the departments
	clickButton(dropDownBox[0])

	departmentOptions = dropDownBox[0].find_element_by_xpath('..').find_elements_by_class_name('result')
	for i in range(len(dropDownBox[0].find_element_by_xpath('..').find_elements_by_class_name('result'))):
		clickButton(dropDownBox[0])
		departmentInfo = dropDownBox[0].find_element_by_xpath('..').find_elements_by_class_name('result')[i]
		className = departmentInfo.text.strip() + ' ' 
		clickButton(departmentInfo)
		time.sleep(0.3)
		for j in range(len(dropDownBox[1].find_element_by_xpath('..').find_elements_by_class_name('result'))):
			clickButton(dropDownBox[1])
			classInfo = dropDownBox[1].find_element_by_xpath('..').find_elements_by_class_name('result')[j]
			temp = className + classInfo.text + ' '
			clickButton(classInfo)	
			time.sleep(0.3)
			clickButton(dropDownBox[2])
			for k in range(len(dropDownBox[2].find_element_by_xpath('..').find_elements_by_class_name('result'))):
				sectionInfo = dropDownBox[2].find_element_by_xpath('..').find_elements_by_class_name('result')[k]
				temp2 = temp + sectionInfo.text.strip()
				print(temp2)
				classes.append(temp2)
			dropDownBox[1].clear()
		dropDownBox[0].clear()
	return classes


#Clicks on every combination of department + class number + sections
def getBooks(classInfo):
	driver.get(url);
	booklist = driver.find_element_by_class_name('bookRowContainer')
	termButton = booklist.find_element_by_class_name('selectBoxDropdownLink')
	clickButton(termButton)
	time.sleep(0.3)

	selectTerm = termButton.find_element_by_xpath('..').find_elements_by_class_name('termOption')
	clickButton(selectTerm[2])
	button = booklist.find_elements_by_class_name('bncbTextInput')
	for i in range(len(classInfo)):
		time.sleep(0.3)
		clickButton(button[i])
		for j in button[i].find_element_by_xpath('..').find_elements_by_class_name('result'):
			if j.text.strip() == classInfo[i]:
				clickButton(j)
				break
	driver.find_element_by_class_name('findMaterialsButton').click()
	info = getBookInfo()
	if len(info) == 0:
		info.append('No available textbook')
	info.insert(0, ';')
	info.insert(0, classInfo)
	return info

#Loads the page where the textbooks are located and extracts important information
def getBookInfo():
	info = driver.find_elements_by_class_name('book-list')	
	books = []
	for book in info:
		specificTextBook = []
		try:
			title = book.find_element_by_css_selector('h1 a').text	
			author = book.find_element_by_css_selector('h2 i').text	
			strong = book.find_elements_by_css_selector('strong')
			specificTextBook.append(title.strip() + ',')
			specificTextBook.append(author.replace('By', '').strip() + ';')
			for i in strong:
				if "isbn" in i.text.lower():
					specificTextBook.append(i.find_element_by_xpath('..').text)
				elif "edition" in i.text.lower():
					specificTextBook.append(i.find_element_by_xpath('..').text + ';')	
				elif "publisher" in i.text.lower():
					specificTextBook.append(i.find_element_by_xpath('..').text + ';')	
			books.append(specificTextBook)
		except WebDriverException:
			continue
	return books

#url to the LSU Barns and Nobles webpage
url = "https://lsu.bncollege.com/webapp/wcs/stores/servlet/TBWizardView?catalogId=10001&langId=-1&storeId=19057"

#Sets the chromedriver to run in the background instead of opening a new webpage
options = webdriver.ChromeOptions()
options.add_argument('headless')
driver = webdriver.Chrome('chromedriver', chrome_options=options)

time.sleep(1);

#Uncomment to get all of the department names, classes, and sections
#Get all of the department names
#time1 = time.time() * 1000.0
#list = getClasses()
#print(time.time() * 1000 - time1)
#file = open("textbook.txt", "w")
#for i in list:
#	file.write(i + "\n")
#	print(i)
#file.close()

#Reads in from a file where the class information are recorded and looks up the textbook
classes = [line.rstrip('\n') for line in open('textbook.txt')]

#for word in classes:
#	print(word)

classList = []

time1 = time.time()
counter = 2190
total = len(classes)
file = open('updatedtextbook.txt', 'a')
#Gets the textbooks and writes in a txt file
for i in range(2189, len(classes)):
	textbook = getBooks(classes[i].split(' '))
	for list in textbook:
		for info in list:
			file.write(info + ' ')
		
	file.write('\n')
	print('Time elapsed: %f, Completed: %d / %d' %(((time.time() - time1) / 60), counter, total))
	counter = counter + 1
file.close()
#for i in classes:
#	textbook = getBooks(i.split(' '))
#	for list in textbook:
#		for info in list:
#			file.write(info + ' ')
#		
#	file.write('\n')
#	print('Time elapsed: %f, Completed: %d / %d' %(((time.time() - time1) / 60), counter, total))
#	counter = counter + 1
#file.close()
