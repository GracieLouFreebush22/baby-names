
export function AppHeader(): JSX.Element {
  /*
  const [favName, setFavName] = useState("");
  const [storedName, setStoredName] = useState<string[]>([])

const handleAddFavName = () => {
  setFavName(favName)
}
 const handleStoreFavNameClicked = () => {
  setStoredName([...storedName, favName])
 }
*/
  return (
    <div>
      <h3> Favorites: </h3>
      <button className="store-button"> Store Name as Favorite </button>
    </div>
  );
}

export default AppHeader;
