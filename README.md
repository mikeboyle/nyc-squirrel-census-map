# NYC Squirrel Census Map

This app pulls data from [the 2018 Central Park Squirrel Census](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw) and visualizes it on a map.

There are some filters that are dynamically generated from the API payload data which you can use to view certain types of squirrel encounters and behaviors.

The map integration was built with the [google-map-react library](https://github.com/google-map-react/google-map-react) which made a lot of this very easy to do.

## TODOS

- [ ] Build a back end for better app token security
- [ ] More human readable filter labels and titles
- [ ] Some other types of visualizations of insights from the data set
- [x] Better organization of components into folders
- [ ] Unit testing
- [x] Handle cases where filters lead to 0 results (don't remove map)
