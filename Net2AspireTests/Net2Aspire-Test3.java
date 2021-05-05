//What is wrong with this code?

public int doThings(String numberString) {
    try {
        int i = Integer.parseInt(numberString);
    } catch(Exception e) {
        System.out.println(e);
    }
    return i;
}

// I chose:  Nothing's wrong
// parseInt() can't produce Exception
// Integer can't cast to int
// numberString should be null checked
// i isn't in scope to be returned.

//I think it was parseInt() can't produce Exception.  :-(
