StringBuilder inputStr = new StringBuilder(str.toLowerCase());
        StringBuilder newStr = new StringBuilder(str.toLowerCase());
        System.out.println("newStr: " + newStr.toString() + " inputStr: " + inputStr.toString() );
        if (newStr.reverse() == inputStr) {
            retVal = true;
        }
