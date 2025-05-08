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
      title: "Project",
      link: "#"
    },
    {
      title: "Contact Me",
      link: "#",
    },
  ];

  return{isOpen, navList};
}