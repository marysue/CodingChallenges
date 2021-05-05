public static int nonDuplicates(int[] array) {
    Map<Integer, Integer> count = new HashMap<>();
    for (int a : array) {
        Integer aNum = count.get(a);
        if (aNum == null) {
            aNum = 1;
        } else {
            aNum++;
        }
        count.put(a, aNum);
    }
    Set<Integer> keySet = new HashSet<>(count.keySet());
    for (Integer key : keySet ) {
        //INSERT MISSING CODE HERE {
            {
                count.remove(key);
            }
        }
        return count.size();
    }
// if (count.get(key) != null && count.get(key) > 0) {
// while(count.get(key) != null || count.get(key) > 1) {
// if (count.get(key) != null) {
// while(count.get(key) != null && count.get(key) > 0) {
//if (count.get(key) != null && count.get(key) > 1) {
    
