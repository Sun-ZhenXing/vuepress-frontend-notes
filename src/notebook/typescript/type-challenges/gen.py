import os
import pathlib
import re

USER_PATH = os.environ["USERPROFILE"]
SOURCE_PATH = os.path.join(USER_PATH, ".typeChallenges")

IMPORT_SRC = "'./test-utils'"
IMPORT_FROM = "'@type-challenges/utils'"

CURRENT_PATH = str(pathlib.Path(__file__).parent.absolute())

TEMPLATE = """\
# {title}

<题目描述>

::: playground#ts {title}

@file index.ts

```ts
{code}
```

:::

::: details 点击查看答案

```ts
// 你的答案
```

:::
"""


def main():
    if not os.path.exists(SOURCE_PATH):
        print("Source path not found.")
        return -1
    for f in os.listdir(SOURCE_PATH):
        if not f.endswith(".ts"):
            continue
        macthes = re.search(r"^0*(\d+)-(?:warm|easy|medium|hard|extreme)-(.+)\.ts$", f)
        if not macthes:
            print(f"Invalid file name: {f}")
            continue
        num, title = macthes.groups()
        filename = f"{num}-{title}.md"
        filepath = os.path.join(CURRENT_PATH, filename)
        if os.path.exists(filepath):
            print(f"File {filename} already exists.")
            continue
        print(f"Generating {filename}")
        with open(os.path.join(SOURCE_PATH, f), "r", encoding="utf-8") as fp:
            code = fp.read()
        with open(filepath, "w", encoding="utf-8") as fp:
            fp.write(
                TEMPLATE.format(
                    title=num + ". " + title.replace("-", " ").title(),
                    code=code.replace(IMPORT_SRC, IMPORT_FROM),
                )
            )
    return 0


if __name__ == "__main__":
    exit(main())
