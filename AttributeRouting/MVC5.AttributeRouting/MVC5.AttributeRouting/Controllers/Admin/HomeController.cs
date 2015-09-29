using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Controllers.Admin
{
    //[RouteArea("Admin", AreaPrefix = "Manager")]
    [RouteArea("Manager")]
    [Route("Home/{action}")]
    public class HomeController : Controller
    {
        string routePattern = "Pattern: Admin/Home/{action}";
        public ActionResult Index()
        {
            string action = "Current Route: Admin/Home/Index";

            return Content(routePattern + "<br/>" + action);
        }
    }
}