using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Examples
{
    public class RouteValueController : Controller
    {
        [Route("RouteValue/Index/{year}/{month}/{day}")]
        public ActionResult Index(string year, string month, string day)
        {
            const string result = @"Route: RouteValue/Index/{year}/{month}/{day}";
            string value = "year:" + year + " month:" + month + " day:" + day;

            return Content(result + "<br/>" + value);
        }

        [Route("RouteValue/Details/{id}")]
        public ActionResult Details(int id)
        {
            const string result = @"Route: RouteValue/Details/{id}";
            string idValue = "id:" + id;

            return Content(result + "<br/>" + idValue);
        }
	}
}