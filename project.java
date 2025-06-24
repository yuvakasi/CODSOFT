import java.awt.*;
import java.awt.TrayIcon.MessageType;

public class NotificationDemo {
    public static void main(String[] args) {
        // Step 1: Check if system tray is supported
        if (!SystemTray.isSupported()) {
            System.out.println("SystemTray not supported");
            return;
        }

        // Step 2: Get the system tray
        SystemTray tray = SystemTray.getSystemTray();

        // Step 3: Create a tray icon image (optional)
        Image image = Toolkit.getDefaultToolkit().createImage("");

        // Step 4: Create tray icon object
        TrayIcon trayIcon = new TrayIcon(image, "Java Notification");
        trayIcon.setImageAutoSize(true);
        trayIcon.setToolTip("CodSoft Notification");

        // Step 5: Add the icon to the system tray & show message
        try {
            tray.add(trayIcon);
            trayIcon.displayMessage(
                "CodSoft Internship",
                "✅ Task 4: Notification using Java Completed",
                MessageType.INFO
            );
        } catch (AWTException e) {
            System.out.println("TrayIcon could not be added.");
        }
    }
}
