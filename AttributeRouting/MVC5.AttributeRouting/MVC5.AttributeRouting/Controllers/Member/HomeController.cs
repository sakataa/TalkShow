using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Controllers.Member
{
    //[RouteArea("Member", AreaPrefix = "Normal")]
    [RouteArea("Normal")]
    [Route("Home/{action}")]
    public class HomeController : Controller
    {
        string routePattern = "Pattern: Member/Home/{action}";
        public ActionResult Index()
        {
            string action = "Current Route: Member/Home/Index";

            return Content(routePattern + "<br/>" + action);
        }
	}
}