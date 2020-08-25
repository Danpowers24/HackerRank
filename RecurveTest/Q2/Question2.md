import datetime
from dateutil.parser import parse
from dateutil.relativedelta import *

def parse_for_platform(raw_ami_data):
    sites = []
    projects = []
    meters = []
    
    lines_of_data = raw_ami_data.split("|")

    for line in lines_of_data:
        row = make_row(line)
        # Looks like we need to return a list of dictionaries,
        # sites = {"site_id": input.["meter_number"], "raw_address": input.["street"] + input.["city"] + input.["zipcode"]}
        unit = "null"

        if row["meter_number"][0] == "G":
            type = "gas"
            unit = "therm"
        elif row["meter_number"][0] == "E":
            type = "electricity"
            unit = "kwh"
        # prompt calls to discard the line...
        else:
            type = "null"
        
        # Format dates to satisfy tests
        start_date_util = str(parse(row["project_date"]))
        start_date_formatted = start_date_util.replace(' ', 'T')
        
        start_date = datetime.datetime.strptime(start_date_util, "%Y-%m-%d %H:%M:%S")
        end_date = str(start_date + datetime.timedelta(days=1))
        end_date_formatted = end_date.replace(' ', 'T')

        meter_start_date_input = str(parse(row["read_from"]))
        meter_start_date_formatted = meter_start_date_input.replace(' ', 'T')

        meter_end_date_input = str(parse(row["read_to"]))
        meter_end_date_formatted = meter_end_date_input.replace(' ', 'T')

        # intervention_active_date_util = str(row["project_date"])+datetime.timedelta(days=1)
        # intervention_active_date = str(intervention_active_date_util.replace(' ', 'T'))

        sites = {
            "site_id": row["meter_number"], 
            "raw_address": row["street"] + " " + row["city"] + " CA " + row["zipcode"]
        },
        projects = {"project_id": row["project_name"], 
            # will have to look into converting input dates to datetime format
            "blackout_start_date": start_date_formatted, 
            # appears to be project_date plus 1 day
            "intervention_active_date": end_date_formatted, 
            "project_site": row["meter_number"]
        },
        meters = {
            "meter_id": row["meter_number"],
            "meter_site": row["meter_number"],
            # may have to adjust this next item
            "type": type,
            "unit": unit,
            "start": meter_start_date_formatted,
            "end": meter_end_date_formatted,
            "value": row["amount"],
        },
        {
            "meter_id": row["meter_number"],
            "meter_site": row["meter_number"],
            # may have to adjust this next item
            "type": type,
            "unit": unit,
            "start": meter_start_date_formatted,
            "end": meter_end_date_formatted,
            "value": row["amount"],
        },
        

    return sites, projects, meters


    This works for a single input, I need to be able to spit out multiple meters for each input