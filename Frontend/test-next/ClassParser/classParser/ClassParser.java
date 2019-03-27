import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.regex.*;

class Parser {

	String fileName, fileNameW = "parsedTest.txt", department;;
	
	public Parser(String fileName, String department) {
		this.fileName = fileName;
		this.department = department;
	}

	/*
	This method will take in a text file and simply parse through it.
	Goal is to extract the department, class number, and the professors name from the text file.
	Use regular expression where you search for CSC followed by astricts
	*/
	public void parseFile() throws IOException {
		try(BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
			String line;
			String regex = "(" + department + "\\s+\\d+)\\s+(\\d+)\\s+([a-zA-Z&\\+\\-[ ]]*)\\s+\\d+.\\d+\\s+(\\d+-\\d+)\\s+[A-Z[ ]]*\\s+\\d+\\s+\\w+\\s\\w*\\s*([a-zA-Z ]*)";
			try(BufferedWriter writer = new BufferedWriter(new FileWriter(fileNameW))) {
				while((line = reader.readLine()) != null) {
					Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
					Matcher matcher = pattern.matcher(line);
					while(matcher.find()) {
						for(int i = 1; i <= matcher.groupCount(); i++) {
							writer.write(matcher.group(i) + " " );
							System.out.print(matcher.group(i) + " ");
						}
						writer.write("\n");
						System.out.println();
					}
				}
			}
		}
	}

}

public class ClassParser {

	public static void main(String[] args)throws IOException {
		Parser parser = new Parser("/Users/austinlee/Desktop/ClassParser/test.txt", "CSC");
		parser.parseFile();
	}

}
