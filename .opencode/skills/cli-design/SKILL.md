---
name: cli-design
description: "Use when implementing CLI interfaces, commands, argument parsing, output formatting, or error messages. Covers terminal UI patterns, cross-platform compatibility, and user experience."
---

# CLI Design Skill

## Principles

- Simple, clear command structure
- Descriptive error messages that tell the user what to do
- Proper exit codes (0 success, 1 error, 2 usage error)
- Graceful handling of interrupted operations
- No colors or formatting that breaks in pipes/redirects

## Command Structure

```
sql-extractor <command> [options]

Commands:
  extract     Extract tables from a SQL dump
  list        List databases and tables in a SQL dump
  validate    Validate a SQL dump file

Options:
  --help      Show help
  --version   Show version
  --quiet     Minimal output
  --verbose   Detailed output
```

## Argument Parsing

- Use a well-tested argument parser (e.g., `commander`, `yargs`, `citty`)
- Validate inputs before processing
- Show help on invalid usage
- Support both short (`-f`) and long (`--file`) flags

## Output Formatting

- Use plain text by default
- Support `--json` for machine-readable output
- Use consistent column alignment for tables
- Handle terminal width gracefully
- No ANSI codes when output is piped

## Error Messages

- Always include what went wrong
- Always suggest how to fix it
- Include the relevant file path or argument
- Never expose internal errors or stack traces to users

Example:
```
Error: File not found: /path/to/dump.sql
  Check the file path and try again.
  Use `sql-extractor list --help` for usage information.
```

## Cross-Platform

- Handle path separators correctly (/ vs \)
- Use `path` module for all file operations
- Test on Linux, macOS, and Windows
- Handle Unicode file names gracefully
