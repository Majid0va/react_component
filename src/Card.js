const Card=(props) => {
    
    return (
        <div class="ui card">
  <div class="image">
    <img src={props.avatar} />
  </div>
  <div class="content">
    <a class="header">{props.name}</a>
    <div class="meta">
      <span class="date">{props.date}</span>
    </div>
    <div class="description">
      {props.description}
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
    );
};

export default Card;