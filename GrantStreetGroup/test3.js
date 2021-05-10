/*
An anagram is a word that can be obtained by rearranging the letters of another word,
using all the constituent letters exactly once. For example, the words "admirer" and
"married" are anagrams of one another. However, the words "rather" and "harder" are
not anagrams, since "rather" does not contain the letter 'd' and "harder" does not
contain the letter 't'. Two identical words are anagrams, too. You may also notice that
the anagram of any word must be of the same length as the word itself.

Bob has written two words, A and B, consisting of N and M letters, respectively. He
would like them to be anagrams of each other. Bob has decided to add some letters to
these words to achieve his goal.

JFor example, given the words "rather" and "harder", bob can add the letter 'd' to
the first words and the letter 't' to the second word. Having done this, the words
are now anagrams.

Bob would like to add as few letters as possible. In the example above, Bob added
two letters, which is the minimum possible. Your task is to tell him the minimum
number of letters that he needs to add to make the given words anagrams in this
way.

Write a function
    function solution(A,B);

that, given two non-empty strings, A and B, consisting of N and M letters respectively,
returns the minimum numbers of letters that Bob has to add to the words specified in
A and B to make them anagrams.

For example, given the words "rather" and "harder" your function should return 2,
as explained above.

For the given words "apple" and "pear" your function should return 3, since you can
add the letter 'r' to the first word and the letters 'p' and 'l' to the second word to form
anagrams.

And for the given words "lemon" and "melon", your function should return 0, since
the given words are already anagrams.

Write an efficient algorithm for the following assumptions:
   N and M are integers within the range [1..100,000];
   string('A', 'B') consists only of lowercase letters(a-z).
   
*/
