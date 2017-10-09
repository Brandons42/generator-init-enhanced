# <%= name %> [![NPM version][npm-image]][npm-url] <% if (uname.length > 0) {%> [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] <% } %>
> <%= desc %>
<%= exp %>
<% if (auth.length > 0) { %>
## License

 © [<%= auth %>]<% if (url.length > 0) { %>(<%= url %>)<% } %>
<% } %>

[npm-image]: https://badge.fury.io/js/<%= name %>.svg
[npm-url]: https://npmjs.org/package/<%= name %>
<% if (uname.length > 0) {%>
[travis-image]: https://travis-ci.org/<%= uname %>/<%= name %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= uname %>/<%= name %>
[daviddm-image]: https://david-dm.org/<%= uname %>/<%= name %>.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/<%= uname %>/<%= name %>
<% } %>
