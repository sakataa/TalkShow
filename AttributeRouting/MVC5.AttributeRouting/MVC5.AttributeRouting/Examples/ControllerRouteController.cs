using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Examples
{
    [RoutePrefix("ControllerRoute")]
    [Route("{action}")]
    public class ControllerRouteController : Controller
    {
        [Route("~/")]
        [Route("")] // You can shorten this to [Route] if you prefer.
        [Route("index")]
        public ActionResult Index()
        {
            return Content("ControllerRoute/Index");
        }
        public ActionResult About()
        {
            return Content("ControllerRoute/About");
        }
        public ActionResult Contact()
        {
            return Content("ControllerRoute/Contact");
        }
	}
}