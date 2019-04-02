import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.*;

import java.util.regex.*;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.File;
import java.io.FilenameFilter;

import java.io.IOException;

import java.util.ArrayList;
import java.util.List;

class TextbookRetrieve {

	//url to the textbook search
	private String url;

	String classInformationPath; 
	String textbookInformationPath;

	File fileNamePaths[];

	private List<String> semesterId, semesterNames,
			departmentId, departmentName,
			classId, classNumber,
			sectionId, sectionName;

	public TextbookRetrieve(String url, String classInformationPath, String textbookInformationPath) {
		this.url = url;	
		this.classInformationPath = classInformationPath;
		this.textbookInformationPath = textbookInformationPath;
	}

	public String getUrl() {
		return url;
	}


	//I need to be able to know what file names I need to open
	public void parseClassInformation() throws IOException {
		for(int j = 0; j < 1; j++) {
//		for(File file: fileNamePaths) {
			String department = "(\\w*\\s+)",
				classNumber = "(\\d+)",
				sectionNumber = "(\\d+)",
				any = ".*",
				space = "\\s*";
			String regex = department + space + classNumber + space + sectionNumber + any;
			try(BufferedReader reader = new BufferedReader(new FileReader(fileNamePaths[j].getCanonicalPath()))) {
//			try(BufferedReader reader = new BufferedReader(new FileReader(file.getCanonicalPath()))) {
				String line;
				while((line = reader.readLine()) != null) {
					Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
					Matcher matcher = pattern.matcher(line);
					while(matcher.find()) {
						for(int i = 1; i <= matcher.groupCount(); i++) {
							System.out.print(matcher.group(i) + " ");
						}
//						getTextbookInformation(matcher.group(1), matcher.group(2), matcher.group(3));
						System.out.println();
					}
				}
			}
//		}	
		}

	}

	public void testValues() {
		getSemesterValues();
		getDepartmentValues();
//		getClassValues();
//		getSectionValues();
	}

	public void getSemesterValues() {
		System.out.println("semesterValues");
		try {
			Document doc = Jsoup.connect(this.url).timeout(50000).get();	
			Element element = doc.getElementsByClass("termOptions").first();
			Elements test = element.select("li[class = bncbOptionItem termOption]");
			System.out.println(test.outerHtml());
			this.semesterId = test.eachAttr("data-optionvalue");
			for(String str : this.semesterId) {
				System.out.println(str);
			}

		} catch(Exception ex) {
			ex.printStackTrace();
		}
	}

	public void getDepartmentValues() {
		System.out.println("departmentValues");

		try {
			Document doc = Jsoup.connect(this.url).timeout(5000).get();
			Element element = doc.getElementsByClass("deptSelectInput bncbTextInput").first();
			System.out.println(element == null);	
		} catch(Exception ex) {
			ex.printStackTrace();
		}
	}

	public void getTextbookInformation(String department, String classNumber, String sectionNumber) {
		try {
			Document doc = Jsoup.connect(this.url).timeout(50000).get();	
			Element element = doc.getElementsByClass("termOptions").first();
			System.out.println(element.html());
			Elements test = element.select("li[class = bncbOptionItem termOption]");
			List<String> list = test.eachAttr("data-optionvalue");
			for(String str : list) {
				System.out.println(str);
			}






//			Document update = Jsoup.connect(doc.select("form[name = FindCourse]").first().absUrl("action")).data("firstTermName_17548053", "Spring 2019").data("firstTermId_17548053","87552230").data("selectDepartment", "CSC").data("selectCourse", "1351").data("selectSection", "001").timeout(5000).post();			



		} catch(Exception ex) {
			ex.printStackTrace();
		}
	}	


	public void readFilePaths() {
		System.out.println("There are " + fileNamePaths.length + " departments");
		for(File file : fileNamePaths) {
			System.out.println(file.getName());
		}
	}

	public void getFileNames(String filePath) {
		
		File f = new File(filePath);	
		FilenameFilter textFilter = new FilenameFilter() {
			public boolean accept(File dir, String name) {
			    return name.toLowerCase().endsWith(".txt");
			}
		};
		this.fileNamePaths = f.listFiles(textFilter);
	}

	public void execute() throws IOException {
		getFileNames(classInformationPath);
//		readFilePaths();
		parseClassInformation();		
		getTextbookInformation("", "", "");
	}


}

public class Textbook {

	public static void main(String[] args) throws IOException{
		
		String url = "https://carleton.bncollege.com/webapp/wcs/stores/servlet/TBWizardView?catalogId=10001&langId=-1&storeId=87738";
//		String url =  "https://lsu.bncollege.com/webapp/wcs/stores/servlet/TBWizardView?catalogId=10001&langId=-1&storeId=19057";
		String readPath = "/Users/austinlee/Desktop/ClassParser/parsedClassInformation";
		String writePath = "/Users/austinlee/Desktop/ClassParser/textbookInformation";
		TextbookRetrieve textbook = new TextbookRetrieve(	url,
									readPath,
									writePath);
		textbook.testValues();
	}

}
