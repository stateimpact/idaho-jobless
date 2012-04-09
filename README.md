Jobless in Idaho
===================

Quick start:

    $ python -m SimpleHTTPServer 9000

Then go to <http://localhost:9000>.

This is a one-page, entirely static application. It is built once, locally, and deployed to a server where it can be served by nginx or apache.

Data is stored in the `data` directory; config and template files are in `config`. Assets are compiled with `jammit` into the `public/assets` folder, using `config/assets.yml`.


Updating data
-------------

Download a snapshot of unemployment data from Idaho's report builder here: http://lmi.idaho.gov/Data/tabid/781/ctl/LaborForce/mid/982/Default.aspx

Make sure to include the right types:
 - Nation
 - Idaho
 - County

Select all available areas. Include years 2005 to the present (unless you really want a different slice). Select every month; exclude annual reports. Download a CSV.

Change the column headers to lowercase, change "period" to "month" and save the CSV file to `data/unemployment-YEAR-MONTH-DAY.csv`, using the date you downloaded the data. Filter out rows that are preliminary or not adjusted. You can then remove those columns, since all figures will be adjusted. I use [csvkit][] for this, like so (assuming the original file is called `unemployment.csv`:

    $ cat unemployment.csv | csvgrep -c preliminary -m No | csvgrep -c adjusted -m Yes | csvcut -c year,month,areaname,laborforce,employment,unemnployment,unemploymentrate | csvjson > unemployment.json

This process may require minor adjustment as Idaho Department of Labor changes its data structure. Be prepared to change names or functions. Best to do this on a branch.

In `fabfile.py`, set `env.unemployment` to the name of the new unemployment stats file. If the data structure remains unchanged from last month, you should be able to simply run

    $ fab build

and you'll have new data in the app. If something breaks, check column headers and any functions that filter data.

 [csvkit]: https://github.com/onyxfish/csvkit


