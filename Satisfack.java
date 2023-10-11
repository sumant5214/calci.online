import java.io.*;
class Satisfack{
    public static void main(String[] args) throws FileNotFoundException{
        File fr = new File("C:\\Users\\Sumant Vetal\\OneDrive\\Documents");
        try {
            File files[] = fr.listFiles();
            System.out.println("Files are : ");
            for(int i=0;i<files.length;i++){
                System.out.println(files[i].getName());
            } 
            File f = new File("C:\\Users\\Sumant Vetal\\OneDrive\\Documents\\zaid");
            System.out.println(f.isHidden());
        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}