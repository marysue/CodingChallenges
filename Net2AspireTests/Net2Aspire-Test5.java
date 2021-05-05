//What does this method return?

public List<Integer> someFunction(final List<Integer> numbers) {
    List<Integer> result = new ArrayList<Integer>();
    for (int i = numbers.size() - 1; i >= 0; i--) {
        result.add(numbers.get(i));
    }

    return result;
}

//--> I chose:  A reverse ordered list
// An incrementally sorted list
// The same list
// A decrementally sorted list
// Throws ARrayIndexOutOfBoundsException;

