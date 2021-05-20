import java.util.*; //Needed for Map and HashMap
import java.lang.*; //Needed for StringBuilder class

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        System.out.println(average(2, 1));

        //Do not use HashTable or Dictionary -- deprecated -- use Map and HashMap;
        Map<Integer, Integer> myDict = retDict(1223334444);
        System.out.println("Dictionary Values...");
        System.out.println("Expecting 1:1, 2:2, 3:3, 4:4");
        for (Map.Entry<Integer, Integer> entry : myDict.entrySet()) {
            Integer key = entry.getKey();
            Integer value = entry.getValue();
            System.out.println(key + ":" + value);
        }

        System.out.println("Is Anna a palindrome? ");
        System.out.println(isPalindrome("anna"));
    }
    public static boolean isPalindrome(String str) {
        boolean retVal = false;
        //StringBuilder has a reverse method on it
        StringBuilder inputStr = new StringBuilder(str.toLowerCase());
        StringBuilder newStr = new StringBuilder(str.toLowerCase());
        System.out.println("newStr: " + newStr.toString() + " inputStr: " + inputStr.toString() );
        //Java needs equals() method to compare two strings, or== compares the reference
        if (newStr.reverse().toString().equals(inputStr.toString())) {
            retVal = true;
        }

        return retVal;
    }
    public static double average(int a, int b) {
        //Need to convert both to doubles
        //Need to use parens or you'll have a + (b/2); as divide occurs before add
        return (Double.valueOf(a) + Double.valueOf(b) )/ (2);
    }
    public static Map<Integer, Integer> retDict(Integer nbr) {
        Map<Integer, Integer> dictionary = new HashMap<Integer, Integer>();

        while (nbr > 0) {
            Integer current = nbr%10;
            nbr = nbr / 10;
            Integer key = current;
            Integer value = 0;
            if (dictionary.containsKey(key)) {
                value = dictionary.get(key) + 1;
            } else {
                value = value + 1;
            }

            dictionary.put(key, value);
        }
      return dictionary;
    }


}
