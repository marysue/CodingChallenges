// FIND THE PROBLEMS AND FIX THEM
// IF THERES TIME, REFACTOR CODE AS YOU WISH
// THIS TEST IS ALSO GIVEN TO SR. ENGINEERS!

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

import jdk.javadoc.internal.doclets.formats.html.SourceToHTMLConverter;

public class MyCode {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random r = new Random();
        String[] list1 = {"barbecue", "boil", "broil", "bake", "saute", "kabobs", "creole"};
        boolean go = true;

        while (go) {
            int randomNumber = r.nextInt(list1.length-1);
            char[] select = list1[randomNumber].toCharArray();
            char[] state = new char[select.length];
            Arrays.fill(state, '-');

            boolean allMatched = false;
            int incorrect = 0;

            while (!allMatched && incorrect <= 6) {
                System.out.println("select:  " + String.valueOf(select));
                System.out.println("state:  " + String.valueOf(state) + "\n\n");
                System.out.println("Guess a letter: " + (6 - incorrect) + " guesses left.");
                char input = scanner.nextLine().charAt(0);
                System.out.println("input:  " + input);

                //Is entered letter in selected string?  If so, add it to the state char array.
                boolean found = false;
                for (int i = 0; i < select.length; i++) {
                    if (select[i] == input) {
                        state[i] = input;
                        found = true;
                    }
                }

                //Entered letter is not in selected string; increment incorrect;
                if (!found) {
                    incorrect++;
                }

                //did we guess the entire word?
                allMatched = true;
                for (char c: state) {
                    if (c == '-') {
                        allMatched = false;
                        break;
                    }
                }

            }

            if (allMatched) {
                System.out.println("You lose.\n\n");
            } else {
                System.out.println("YOU WON!!!\n\n");
            }
            System.out.println("Play Again? (yes/no) ");
            String choice = scanner.nextLine();
            if (choice.equals("yes")) {
                go = true;
            }
        }
        System.out.println("Done");
    }

}
