import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.*;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

class Scrap {
	//Url to LSU's schedule booklet
	final String url;

	//Name of the departments
	final List<String> department = new ArrayList<>();
	final List<String> departmentsFound = new ArrayList<>();

	//File name that contains the department names
	private String departmentFileName;
	
	private String listOfDepartmentClassesFound = "classesFound2019.txt";

	public Scrap(String url, String departmentFileName) {
		this.url = url;
		this.departmentFileName = departmentFileName;
	}

	//Stores the department names in the list of departments
	public void populateDepartmentList() throws IOException {
		try(BufferedReader br = new BufferedReader(new FileReader(departmentFileName))) {
			String line;
			while((line = br.readLine()) != null) {
				department.add(line);
			}	
		}	
	}	

	//Webscrapper that extracts the html code for each department and semester that contains the text of the class information.
	//Used Jsoup to parse through the html code
	public void scrapClasses() {
		try {
			final Document document = Jsoup.connect(url).get();
			Document mainFrameSet = Jsoup.connect(document.select("frame[NAME = SEL]").first().absUrl("src")).get();
			for(int i = 0; i < department.size(); i++) {
				Document update = Jsoup.connect(mainFrameSet.select("form[name = _Selector2]").first().absUrl("action")).data("SemesterDesc","Fall 2019").data("Department",department.get(i)).timeout(5000).post();
				Element text = update.select("pre").first();
				if(text != null) {
					String classInformation = text.text();
					System.out.println(department.get(i) + " successfully written!");
					createDepartmentFile(classInformation, department.get(i));				
					departmentsFound.add(department.get(i).trim() + ".txt");
				}
			}
			writeDepartmentsFound();
		} catch(Exception ex) {
			ex.printStackTrace();
		} 
	}	

	//Method that creates a textfile of the class information
	private void createDepartmentFile(String classInformation, String department) throws IOException {
		try(BufferedWriter writer = new BufferedWriter(new FileWriter("/Users/austinlee/Desktop/ClassParser/webscrapper/classInformation/"+ department.trim() + ".txt"))) {
			writer.write(classInformation);	
		}
	}

	private void writeDepartmentsFound() throws IOException {
		try(BufferedWriter writer = new BufferedWriter(new FileWriter("/Users/austinlee/Desktop/ClassParser/" + listOfDepartmentClassesFound))) {
			for(String str : departmentsFound) {
				writer.write(str + "\r\n");
			}

		}
	}

	public void printDepartment() {
		for(String str : department) {
			System.out.println(str);
		}
	}

}



public class Scrapper {

	public static void main(String[] args) throws IOException {
		final String url = "http://appl101.lsu.edu/booklet2.nsf/mainframeset";
		final String departmentFile = "department.txt";
		Scrap scrapper = new Scrap(url, departmentFile);
		scrapper.populateDepartmentList();
//		scrapper.printDepartment();
		scrapper.scrapClasses();
	}
} 
