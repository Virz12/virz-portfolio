export const useNavBar = () => {
  const isOpen = useState<boolean>('isOpen', () => false)
  
  const navList = [
    {
      title: "Home",
      link: "#home"
    },
    {
      title: "About",
      link: "#about"
    },
    {
      title: "Projects",
      link: "#projects"
    },
    {
      title: "Contact Me",
      link: "#contact",
    },
  ];

  return{isOpen, navList};
}