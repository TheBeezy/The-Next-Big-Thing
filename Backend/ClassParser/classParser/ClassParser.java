import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.regex.*;
import java.util.ArrayList;
import java.util.List;
class Parser {

	//Path to the folder that contains the class information
	String classInformationFileName;
	
	//Path to the file that contains the departments that have been extracted from LSU's schedule booklet
	String departmentList; 

	//Path to the folder with the parsed class information
	String parsedClassInformation;

	//Stores the name of the textfiles
	List<String> textfiles = new ArrayList<>();	
	
	public Parser(String classInformationFileName, String parsedClassInformation, String departmentList) {
		this.classInformationFileName = classInformationFileName;
		this.departmentList = departmentList;
		this.parsedClassInformation = parsedClassInformation;
	}

	//Generates the list of the name of the textfiles of the class information
	public void generateDepartmentList() throws IOException {
		try(BufferedReader reader = new BufferedReader(new FileReader(departmentList))) {
			String line;
			while((line = reader.readLine()) != null) {
				textfiles.add(line);
			}
		}
	}

	/*
	This method will take in a text file and simply parse through it.
	Goal is to extract the department, class number, and the professors name from the text file.
	Use regular expression where you search for CSC followed by astricts
	*/
	public void parseFile() throws IOException {
		String line,
			space = "\\s+",
			departmentNumber = "(\\w*\\s+\\d+)",
			section = "(\\d+)",
			className = "([a-zA-Z&\\+\\-[ ]/]*)",
			sectionNumber = "\\d+.\\d+",
			time = "(\\d+-\\d+\\w*)",	
			days = "[A-Z[ ]]*",
			roomNumber = "\\d+",
			building = "\\w+\\s\\w*",
			teacher = "([a-zA-Z -]*)";
//		String regex = departmentNumber + space + section + space + className + space + sectionNumber + space + time + space + days + space + roomNumber + space + building + space + teacher;
		for(int i = 0; i < textfiles.size(); i++) {
			try(BufferedReader reader = new BufferedReader(new FileReader(classInformationFileName + textfiles.get(i)))) {
				String regex = "(\\w*\\s+\\d+)\\s+(\\d+)\\s+([a-zA-Z&\\+\\-[ ]/]*)\\s+\\d+.\\d+\\s+(\\d+-\\d+)\\s+[A-Z[ ]]*\\s+\\d+\\s+\\w+\\s\\w*\\s*([a-zA-Z ]*)";
				try(BufferedWriter writer = new BufferedWriter(new FileWriter(parsedClassInformation + "parsed" + textfiles.get(i)))) {
					while((line = reader.readLine()) != null) {
						Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
						Matcher matcher = pattern.matcher(line);
						while(matcher.find()) {
							for(int j = 1; j <= matcher.groupCount(); j++) {
								writer.write(matcher.group(j) + " " );
								System.out.print(matcher.group(j) + " ");
							}
							writer.write("\n");
							System.out.println();
						}
					}
				}
			}
		}
	}

}

public class ClassParser {

	public static void main(String[] args)throws IOException {
		String readPath = "/Users/austinlee/Desktop/ClassParser/webscrapper/classInformation/";
		String writePath = "/Users/austinlee/Desktop/ClassParser/parsedClassInformation/";
		String fileNamesPath = "/Users/austinlee/Desktop/ClassParser/classesFound2019.txt";
		Parser parser = new Parser(	readPath,
						writePath,
						fileNamesPath);
		parser.generateDepartmentList();
		parser.parseFile();
	}

}
