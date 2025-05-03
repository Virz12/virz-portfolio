export const useNavBar = () => {
  const isOpen = useState<boolean>('isOpen', () => false)
  
  const navList = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About",
      link: "/"
    },
    {
      title: "Project",
      link: "/"
    },
    {
      title: "Contact Me",
      link: "/",
    },
  ];

  return{isOpen, navList};
}