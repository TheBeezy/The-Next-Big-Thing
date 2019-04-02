Selenium Webdriver was used to develop a webcrawler that parsed through the bncollege website for lsu
The department, classes, sections, and textbooks were extracted and stored in a textfile called textbook.txt

The code for the webcrawler is located in textbook.py

To store the information into the firestore, the information extracted using the webcrawler was parsed through using regular expressions.
inputDataFirestore.py is the code for this.  It requires a credential path file which will not be included. 
