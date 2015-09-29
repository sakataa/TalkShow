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
        private const string RoutePattern = "Pattern: Admin/Home/{action}";

        public ActionResult Index()
        {
            const string action = "Current Route: Admin/Home/Index";

            return Content(RoutePattern + "<br/>" + action);
        }
    }
}