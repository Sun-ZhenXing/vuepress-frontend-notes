type Data = {
  label: string
  subNodes?: Data[]
}

type TreeNode = {
  name: string
  children?: TreeNode[]
}

const data = [
  {
    label: "A",
    subNodes: [
      {
        label: "A1",
        subNodes: [
          {
            label: "A1.1"
          },
          {
            label: "A1.2"
          }
        ]
      },
      {
        label: "A2"
      }
    ]
  },
  {
    label: "B",
    subNodes: [
      {
        label: "B1"
      },
      {
        label: "B2"
      }
    ]
  },
  {
    label: "C"
  }
]

function changeNameRecursive(data: Data[]): TreeNode[] {
  return data.map(({ label, subNodes }) => ({
    name: label,
    children: subNodes && changeNameRecursive(subNodes)
  }))
}

const result = changeNameRecursive(data)
console.log(JSON.stringify(result, null, 2))
