import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default () =>  <span><li>
<Link to="/posts" > Posts</Link>

</li>
<li>
<Link to="/users" > Users</Link>
</li>
</span>
