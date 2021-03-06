# NYC Squirrel Census Map

This app pulls data from [the 2018 Central Park Squirrel Census](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw) and visualizes it on a map.

![full results of NYC Squirrel Census on a map](./all_squirrels.png)

There are some filters that are dynamically generated from the API payload data which you can use to view certain types of squirrel encounters and behaviors.

![filtered results of NYC Squirrel Census on a map](./filtered_squirrels.png)

I recommend turning the `Has Notes` filter to `true`. You'll find some charming stories of squirrel sightings from some very enthusiastic volunteers.

![Screen shot of squirrel notes: 'literally fell to ground from 50 feet up'](./squirrel_fell.png)
![Screen shot of squirrel notes: 'wrestling with child'](./squirrel_wrestling.png)

The map integration was built with the [google-map-react library](https://github.com/google-map-react/google-map-react) which made a lot of this very easy to do.

## TODOS

- [ ] Build a back end for better app token security
- [ ] Some other types of visualizations of insights from the data set
- [ ] Unit testing
