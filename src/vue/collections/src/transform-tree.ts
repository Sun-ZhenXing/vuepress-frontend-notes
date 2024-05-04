interface Data {
  label: string
  subNodes?: Data[]
}

interface TreeNode {
  children?: TreeNode[]
  name: string
}

const data = [
  {
    label: 'A',
    subNodes: [
      {
        label: 'A1',
        subNodes: [
          {
            label: 'A1.1',
          },
          {
            label: 'A1.2',
          },
        ],
      },
      {
        label: 'A2',
      },
    ],
  },
  {
    label: 'B',
    subNodes: [
      {
        label: 'B1',
      },
      {
        label: 'B2',
      },
    ],
  },
  {
    label: 'C',
  },
]

function changeNameRecursive(data: Data[]): TreeNode[] {
  return data.map(({ label, subNodes }) => ({
    children: subNodes && changeNameRecursive(subNodes),
    name: label,
  }))
}

const result = changeNameRecursive(data)
console.log(JSON.stringify(result, null, 2))
