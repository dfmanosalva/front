import React, {useState, useEffect} from 'react';
import Job from "./Job";
import CreateOffer from "./CreateOffer"

export const Jobs = () => {

  const [state, setState] = useState({offers:[]});

  useEffect(() => {
    const url = "/offers";
    fetch(url)
      .then(res => {
        return res.json();
      }).then(offers => {
        setState({ offers })
      });
  },[])

    return (
      <div>
        <CreateOffer action={() => this.componentDidMount(this)} />
        {state.offers.map((e, i) => <Job key={i} offer={e} />)}
      </div>
    );
}

export default Jobs;