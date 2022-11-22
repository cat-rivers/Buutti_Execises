function buildUserInterface() {
    const mainWindow = { name: "MainWindow", width: 600, height: 400, children: [ ] };
    const buttonExit = { name: "ButtonExit", width: 100, height: 30, children: [ ] };
    mainWindow.children.push(buttonExit);

    const settingsWindow = { name: "SettingsWindow", width: 400, height: 300, children: [ ] };
    const buttonReturnToMenu = { name: "ButtonReturnToMenu", width: 100, height: 30, children: [ ] };
    settingsWindow.children.push(buttonReturnToMenu);
    mainWindow.children.push(settingsWindow);

    const profileWindow = { name: "ProfileWindow", width: 500, height: 400, children: [ ] };
    const profileInfoPanel = { name: "ProfileInfoPanel", width: 200, height: 200, children: [ ] };
    profileWindow.children.push(profileInfoPanel);
    mainWindow.children.push(profileWindow);

    return mainWindow;
}

const userInterfaceTree = buildUserInterface();




function findControl(target, control) {
  if (target.name === control) {
    return target;
  }
  for (const child of target.children) {
    //  console.log(`child of child :  ${child.name}\ntarget child:  ${target.name}\n`)
    let result = findControl(child, control);
    if (result !== null) {
      return result;
    }
  }
  return null;
}

const profileInfoPanel = findControl(userInterfaceTree, "ProfileInfoPanel");
profileInfoPanel.width += 100;
console.log(profileInfoPanel);

//testing for returning null
const random = findControl(userInterfaceTree, "boop");
console.log(random)