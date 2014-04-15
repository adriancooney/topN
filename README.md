## topN
A small node program to output the largest N integers in a file of line separated integers.

### Usage
`topN <filename> <N>`

### Example
`./bin/topN ./test/numbers.txt 30`

### Features
topN uses Node's streams so entire file is never loaded into memory, only small chunks.