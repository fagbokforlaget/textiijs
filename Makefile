test:
	@NODE_ENV=test ./node_modules/.bin/mocha

test-cov: lib-cov
	@TEXTII_COV=1 ./node_modules/.bin/mocha --reporter html-cov > test/coverage.html

lib-cov:
	@rm -fr ./$@
	@./node_modules/.bin/jscoverage --no-highlight lib $@

clean:
	rm -f test/coverage.html
	rm -fr lib-cov

.PHONY: test test-cov lib-cov clean
