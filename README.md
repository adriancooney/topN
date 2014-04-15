## topN
A small node program to output the largest N integers in a file of line separated integers.

### Usage
`topN <filename> <N>`

### Example

	$ ./bin/topN ./test/numbers.txt 30
	977504, 977951, 979175, 980467, 980712, 981087, 981590, 982361, 982791, 983133, 983545, 983774, 984834, 984945, 984953, 987252, 987541, 987968, 987996, 988275, 988331, 990050, 992199, 992877, 993289, 994118, 997528, 997764, 999689, 999868

### Features
topN uses Node's streams so entire file is never loaded into memory, only small chunks.