import React from "react";
import { SearchIcon } from "../../assets/icons/icons";
import './Aside.css'
export function Aside() {
  return (
    <div>
    <div className="aside">
      <div className="aside-searchbox">
        <input placeholder="search post, people, anything" /><SearchIcon/>
      </div>
      <h3 className="follow-card-heading">
          who to follow? <span className="m-l-auto">show more</span>
        </h3>
      <div className="follow-card">
        
        <div className="follow-user">
          <div className="avatar avatar-ss avatar-img">
            <img src="https://pbs.twimg.com/profile_images/1459403696953966593/swzFkftU_400x400.jpg" alt="avatar" className="circle-img" />
          </div>
          <div>
            <h3>Mahendra Chauhan </h3>
            <span className="ft-w-300">@mahendra</span>
          </div>
          <button className="m-l-auto">follow+</button>
        </div>
      </div>
    </div>
    </div>
  );
}
