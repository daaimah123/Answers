function showNewspaperLinks(newspapers) {
    // Get the body element to append the list
    const body = document.body;
  
    // Create an unordered list element
    const ul = document.createElement('ul');
  
    // Iterate through the newspapers array and create list items with clickable links
    newspapers.forEach(newspaper => {
      const li = document.createElement('li');
      const link = document.createElement('a');
  
      // Set the href attribute of the link to the newspaper URL
      link.href = newspaper.url;
  
      // Set the text content of the link to the newspaper name
      link.textContent = newspaper.name;
  
      // Append the link to the list item
      li.appendChild(link);
  
      // Append the list item to the unordered list
      ul.appendChild(li);
    });
  
    // Append the unordered list to the body
    body.appendChild(ul);
  }
  
  // Example array of newspapers
  const newspapersArray = [
    { name: 'The New York Times', url: 'https://www.nytimes.com/' },
    { name: 'The Guardian', url: 'https://www.theguardian.com/' },
    { name: 'BBC News', url: 'https://www.bbc.com/news' },
    // Add more newspapers as needed
  ];
  
  // Call the function with the array of newspapers
  showNewspaperLinks(newspapersArray);
  