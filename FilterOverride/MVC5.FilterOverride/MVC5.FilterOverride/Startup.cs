using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC5.FilterOverride.Startup))]
namespace MVC5.FilterOverride
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
