type navItem = {
  navItem: string,
  link: string
}

type voidFunc = () => void

type ChangeActive = {
  activeItem: string,
  change: (arg: string) => void,
}

type blogCard = {
  label: string,
  icon: React.JSX.Element,
  bgGradiant: string
}