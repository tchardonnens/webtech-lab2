package isep.lab2.server;

import java.io.IOException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "checkLogin", value = "/checkLogin")
public class CheckLoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    public void init() {
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.addHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
        response.addHeader("Access-Control-Allow-Methods", "POST");
        response.addHeader("Access-Control-Allow-Headers", "Content-Type");
        response.addHeader("Access-Control-Max-Age", "86400");
        String login = request.getParameter("login");
        String password = request.getParameter("password");

        if ("abc".equals(login) && "123".equals(password)) {
            response.getWriter().write("1");
        } else {
            response.getWriter().write("0");
        }
    }

    public void destroy() {
    }
}
