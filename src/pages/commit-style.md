# Git commit style guide

## Motivation
It makes going back and reading commits easier.
It also allows you to spend less time thinking about what your commit message should be.
It allows us to recognize unimportant commits like formatting.
It provides better information when browsing the git history.

See how a minor change to your commit message style can make you a better programmer.


## Formula
Format of the commit message.

```bash
$ git commit <type>(<scope>): <subject>
```

For example

```typescript
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

## Rules for commit message

### Length
- Keep lines under 80 characters in width.
- Subject line must not be longer than 60 characters (one line in Github PR description).

### Type
- feat: new feature for the user, not a new feature for build script
- fix: bug fix for the user, not a fix to a build script
- docs: changes to the documentation
- style: formatting, missing semi colons, etc; no production code change
- refactor: (refactoring production code, eg. renaming a variable
- test: adding missing tests, refactoring tests; no production code change
- chore: updating grunt tasks etc; no production code change

### Scope
Where the change was (i.e. the file, the component, the package).

### Subject
- Must be present tense
- Written in the imperative
- First letter is not capitalized
- Does not end with a '.'

### Referencing
Reference issues it fixes, Jira tasks, etc.

- Jira PROD-190
- closes #14
- closes #14, #15
- addresses comment

### Message body
This gives details about the commit, including:
- motivation for the change (broken code, new feature, etc)
- contrast with previous behavior

Some rules for the body:
- Must be in present tense.
- Should be imperative.
- Lines must be less than 80 characters long.

### Message footer
These are notes that someone should be aware of. Format footer in category blocks.

- TESTING -> how to test the change
- BREAKING CHANGE -> what is different now, additional things now needed, etc

## Relative
https://www.conventionalcommits.org/

https://seesparkbox.com/foundry/semantic_commit_messages

http://karma-runner.github.io/1.0/dev/git-commit-msg.html
