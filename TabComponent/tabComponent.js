const ctr = document.getElementById('container');
const myLabels = ['ITEM ONE', 'ITEM TWO', 'ITEM THREE'];

const createTabComponent = (labels) => {
  const tabContainer = document.createElement('div');
  tabContainer.classList.add('tab-component');
  const tabs = document.createElement('ul');
  tabs.classList.add('label-container');

  const createTabs = (labels) => {
    let result = [];

    for (let i = 0; i < labels.length; i++) {
      const label = document.createElement('li');
      label.textContent = labels[i];
      label.classList.add('label-name');

      result.push(label);
    }

    return result;
  };

  const newTabs = createTabs(labels);
  tabs.append(...newTabs);
  tabContainer.appendChild(tabs);

  return tabContainer;
};


const tabComponent = createTabComponent(myLabels);
ctr.appendChild(tabComponent);
