let config = {
  startText: [
    "<center><big><color-4>Welcome to my portfolio website!</big>",
    '<color-grey>Type "help" to get a List of all availiable commands!</color-grey></center>',
  ],
  path: "yeff@portfoliosite~$ ",
  commands: [
    { command: "Links", description: "All my Links", action: link },
    { command: "About", description: "Information about me", action: about },
  ],
  text: [
    { key: "title", value: "YeffyCodeGit" },
    { key: "copyright-text", value: "Copyright 2020 YeffyCodeGit" },
    // Terminal Title
    { key: "title-bar-title", value: "YeffyCodeGit" },
  ],
  css: [
    // Radius
    { key: "terminal-border-radius", value: "30px" },
    // Colors
    { key: "background", value: "#282c34" },
    { key: "terminal-background", value: "#171a1f" },
    { key: "terminal-shadow", value: "rgba(0, 0, 0, 0.2)" },
    { key: "scrollbar-background", value: "#29292a" },
    { key: "scrollbar-handle", value: "#3e4144" },
    // Navigation-Dots
    { key: "dot-1", value: "#d95763" },
    { key: "dot-2", value: "#ff9a26" },
    { key: "dot-3", value: "#6abe30" },
    // Accent-Colors
    { key: "accent-color-1", value: "#d95763" }, // Default: Red
    { key: "accent-color-2", value: "#ff9a26" }, // Default: Orange
    { key: "accent-color-3", value: "#6abe30" }, // Default: Green
    { key: "accent-color-4", value: "#639bff" }, // Default: Blue
    { key: "accent-color-5", value: "#d77bba" }, // Default: Pink
  ],
};

function link(arguments) {
  const links = [
    {
      type: "Github",
      link: { text: "@YeffyCodeGit", url: "https://github.com/YeffyCodeGit" },
    },
  ];

  let result = "<break><color-4>Socials: </color-4> <break>";

  links.forEach((element) => {
    result +=
      "    -   <color-2>" +
      element.type +
      ": </color-2><link " +
      element.link.url +
      " " +
      element.link.text +
      " /><break>";
  });

  return result;
}

function about(arguments) {
    return "<break>Im Yeff (not my real name), a kid who loves programming and everything to do with computers. <break>I started programming with Python, then moved on to learning C# and Java. <break>I learnt Javascript, HTML and CSS at some point because i thought i would try Web Development, but i found it less than interesting. <break>Now I mainly enjoy making libraries, tools, and apps. <break>I don't have many finished projects because I have a tendancy to start projects and not finishing them, but I do have a few completed projects, which you can check on my Github! :D<break>"
}
