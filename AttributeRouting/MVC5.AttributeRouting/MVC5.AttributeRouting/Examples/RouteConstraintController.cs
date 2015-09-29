using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Examples
{
    public class RouteConstraintController : Controller
    {
        [Route("RouteConstraint/{id:int}")]
        public ActionResult Details(int id)
        {
            const string route = @"Route: RouteConstraint/{id:int}";
            string value = "id:" + id;

            return Content(route + "<br/>" + value);
        }
        [Route("RouteConstraint/{name}")]
        public ActionResult Details(string name)
        {
            const string route = @"Route: RouteConstraint/{name}";
            string value = "name:" + name;

            return Content(route + "<br/>" + value);
        }
        [Route("RouteConstraint/{isValid:bool}")]
        public ActionResult Details(bool isValid)
        {
            const string route = @"Route: RouteConstraint/{isValid:bool}";
            string value = "isValid:" + isValid.ToString();

            return Content(route + "<br/>" + value);
        }
	}
}