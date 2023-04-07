import "./home.scss";
import { Search } from "../../Components/Search";
import { data, IData } from "../../Data/data";
import { Card } from "../../Components/Card";
import { CardApiList } from "../../Components/CardApiList";
import { Loading } from "../../Components/Loading";

export function Home(): JSX.Element {
  const ListLoading = Loading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="cards-page">
      <Search />
      <CardApiList props={data} />
      {/* <div className="cards-wrapper">
        {!data ? (
          <div>No Data</div>
        ) : (
          data.map((data: IData) => <Card {...data} key={data.imageNum} />)
        )}
      </div> */}
    </div>
  );
}
