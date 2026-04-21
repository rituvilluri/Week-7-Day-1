const treeData = {
  name: 'T',
  isExpanded: true,
  children: [
    {
      name: 'A',
      isExpanded: true,
      children: [
        { name: 'A1' },
        { name: 'A2' },
        { name: 'A3' },
        {
          name: 'C',
          isExpanded: true,
          children: [
            { name: 'C1' },
            {
              name: 'D',
              isExpanded: true,
              children: [
                { name: 'D1' },
                { name: 'D2' },
                { name: 'D3' }
              ]
            }
          ]
        }
      ]
    },
    { name: 'Z' },
    {
      name: 'B',
      isExpanded: true,
      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }]
    }
  ]
};

export default treeData;
