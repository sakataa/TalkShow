using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Examples
{
	[RoutePrefix("RouteDefault")]
	[Route("{action=index}/{id?}", Name="Default")]
	public class RouteDefaultController : Controller
	{
		private const string RoutePattern = "Pattern: RouteDefault/{action=index}/{id?}";

		public ActionResult Index()
		{
			const string currentRoute = @"Current Route: RouteDefault/Index";

			return Content(RoutePattern + "<br/>" + currentRoute);
		}

		public ActionResult Detail(int id)
		{
			string currentRoute = @"Current Route: RouteDefault/Detail/" + id;

			return Content(RoutePattern + "<br/>" + currentRoute);
		}
		public ActionResult Delete(int id)
		{
			string currentRoute = @"Current Route: RouteDefault/Delete/" + id;

			return Content(RoutePattern + "<br/>" + currentRoute);
		}
	}
}