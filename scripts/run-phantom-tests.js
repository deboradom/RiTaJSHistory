#!/bin/bash
#
# to run one test pass it as an argument: $script RiString
#

set -e # die on errors 

cd ../test

SRC=../src
PHANTOM=node_modules/.bin/phantomjs
ARGS='{globalSummary:true,errors:true}'

if [ $# -lt "1"  ]
then
  TESTS="UrlLoading-tests.js RiGrammar-tests.js RiLexicon-tests.js RiString-tests.js RiTa-tests.js RiTaEvent-tests.js LibraryStructure-tests.js RiMarkov-tests.js RiWordNet-tests.js"
else
  TESTS="$1-tests.js"
fi

echo 

$PHANTOM ../lib/phantomjs-qunit.js AllTests.html 2>&1  | /usr/bin/tee test-log.txt

exit