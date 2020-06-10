# A Pronunciation Dictionary App
* **Objective**
	* to implement a linguistic application that uses a pronunciation dictionary for finding words with similar pronunciation.
* **Purpose**
	* 
* **Description**
	* In this project, you are going to implement a linguistic application that uses a pronunciation dictionary for finding words with similar pronunciation. 

## Background
* What is a _**Phoneme**_?
	* In linguistics, a [Phoneme](https://en.wikipedia.org/wiki/Phoneme) is a perceptually distinct unit of sound that distinguishes one word from another, for example, p, b, d, and t in the English words “pad”, “pat”, “bad”, and “bat”.
* How do we determine _**phonetics**_?
	* We are going to use [The CMU Pronouncing Dictionary](https://en.wikipedia.org/wiki/CMU_Pronouncing_Dictionary) as our reference. It is available as a simply formatted plain text file, a direct link to it is: [cmudict.0.7a](http://svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/cmudict.0.7a)
	* Each line of the dictionary file contains a word followed by the list of its Phonemes.
	* Vowels have the potential for 3 different [stresses](https://en.wikipedia.org/wiki/Stress_(linguistics)). Thus, vowel Phonemes will end with an additional digit, `0`, `1`, or `2` indicating `no-stress`, `primary-stress`, or `secondary-stress`.

#### CMU Pronouncing Dictionary Excerpt

```
PROGRAMME         P R OW1 G R AE2 M
PROGRAMMER        P R OW1 G R AE2 M ER0
PROGRAMMERS       P R OW1 G R AE2 M ER0 Z
PROGRAMS          P R OW1 G R AE2 M Z
PROGRAMS'         P R OW1 G R AE2 M Z
PROGRESS          P R AA1 G R EH2 S
PROGRESS(1)       P R AH0 G R EH1 S
PROGRESS(2)       P R OW0 G R EH1 S
PROGRESSED        P R AH0 G R EH1 S T
PROGRESSES        P R AA1 G R EH2 S AH0 Z
PUSH-UP           P UH1 SH AH2 P
PUSH-UPS          P UH1 SH AH2 P S
```


## Create `Word` class
* `Word` should define a method named
	* `getPronunciation()`
		* returns a list of strings representative of the Phonemes of this word. Indices of the respective list should be indicative of their order of annunciation.  
	* `getSimilarWords()`
		* return a list of all similar sounding-words
	* `getIdentical()`
		* return a list of phonetically identical words
	* `getSimilarWordsWithSubPhonemes()`
		* return a list of words which contain sub-Phonemes
	* `getSimilarWordsWithPhonemes()`
		* return a list of near-phonetically-identical words with additional Phonemes added
	* `getSpelling()`
		* returns the `string` value input upon construction.  
	* `toString()`
		* return a neatly-formatted report of similar-sounding words.

## Part 1
* `Word` should define a method named `getPronunciation()`
	* returns a list of strings representative of the Phonemes of this word. Indices of the respective list should be indicative of their order of annunciation. 


```javascript

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class PronunciationTest {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithSubPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ['D','OW1','N','AH2','T'];
		let input = 'donut';
		_test(expected, input);
	}

	test2() {
		let expected = ['P','R','OW1','G','R','AE2','M'];
		let input = 'program';
		_test(expected, input);
	}


	test3() {
		let expected = ['AH0','K','AO1','R','D'];
		let input = 'accord';
		_test(expected, input);
	}
}

```







## Part 2
* `Word` should define a method named `getIdentical()`
	* returns a list of phonetically identical words. 


```javascript

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class PronunciationTest {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithSubPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ['D','OW1','N','AH2','T'];
		let input = 'donut';
		_test(expected, input);
	}

	test2() {
		let expected = ['P','R','OW1','G','R','AE2','M'];
		let input = 'program';
		_test(expected, input);
	}


	test3() {
		let expected = ['AH0','K','AO1','R','D'];
		let input = 'accord';
		_test(expected, input);
	}
}

```




## Part 3
* `Word` should define a method named `getSimilarWordsWithSubPhonemes()`
	* return a list of words which contain sub-Phonemes 


```javascript

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class getSimilarWordsWithSubPhonemes {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithSubPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["DON'T"];
		let input = 'donut';
		_test(expected, input);
	}

	test2() {
		let expected = ["DRAFT","DRAUGHT","RAFFETY"];
		let input = 'drafty';
		_test(expected, input);
	}


	test3() {
		let expected = ["ALIGN","ALINE","ALLIED","LINED"];
		let input = 'aligned';
		_test(expected, input);
	}
}

```







## Part 4
* `Word` should define a method named `getSimilarWordsWithAddedPhonemes()`
	* return a list of near-phonetically-identical words with additional Phonemes added.


```javascript

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class getSimilarWordsWithAddedPhonemes {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithAddedPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["ACCORD'S", "ACCORDS", "MCCORD", "RECORD"];
		let input = 'accord';
		_test(expected, input);
	}

	test2() {
		let expected = ["DRAFT'S", "DRAFTEE", "DRAFTER", "DRAFTS", "DRAFTY", "DRAUGHTS"];
		let input = 'draft';
		_test(expected, input);
	}


	test3() {
		let expected = ["MALIGNED","UNLINED"];
		let input = 'aligned';
		_test(expected, input);
	}
}

```






## Part 5
* `Word` should define a method named `getSimilarWordsWithReplacedPhonemes()`
	* return a list of near-phonetically-identical words with Phonemes replaced.

```javascript

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class GetSimilarWordsWithReplacedPhonemes {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWordsWithReplacedPhonemes();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["ABOARD","ADORED","AFFORD","AWARD","SCORED"];
		let input = 'accord';
		_test(expected, input);
	}

	test2() {
		let expected = ["CRAFT","DRIFT","GRAFT","KRAFFT","KRAFT"];
		let input = 'draft';
		_test(expected, input);
	}


	test3() {
		let expected = ["AFFINED","ALIGNS","ALINES","ASSIGNED","BLIND"];
		let input = 'aligned';
		_test(expected, input);
	}
}

```









## Part 6
* `Word` should define a method named `getSimilarWords()`
	* return a list of all phonetically identical or similar words.

```javascript

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

class getSimilarWords {
	_test(expected, wordString) {
		let word = new Word(wordString);

		// when
		let actual = word.getSimilarWords();
		
		// then
		let pass = arraysEqual(expected, actual);

		console.log('input = ' + wordString);
		console.log('expected = ' + expected);		
		console.log('actual = ' + actual);
		console.log('test passed = ' + pass);
	}

	test1() {
		let expected = ["ACCORD'S", "ACCORDS", "MCCORD", "RECORD"];
		["ABOARD","ADORED","AFFORD","AWARD","SCORED"];
		let input = 'accord';
		_test(expected, input);
	}

	test2() {
		let expected = ["DRAFT'S", "DRAFTEE", "DRAFTER", "DRAFTS", "DRAFTY", "DRAUGHTS"];
		["CRAFT","DRIFT","GRAFT","KRAFFT","KRAFT"]
		let input = 'draft';
		_test(expected, input);
	}


	test3() {
		let expected = [
			"AFFINED","ALIGN","ALIGNS","ALINE",
			"ALINES","ALLIED","ASSIGNED","BLIND",
			"LINED", "MALIGNED","UNLINED"];

		let input = 'aligned';
		_test(expected, input);
	}
}

```

